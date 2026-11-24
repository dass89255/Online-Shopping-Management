
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .models import CartItem
from .serializers import CartItemSerializer
from products.models import Product


# VIEW CART
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_cart(request):

    cart_items = CartItem.objects.filter(
        user=request.user
    )

    serializer = CartItemSerializer(
        cart_items,
        many=True,
        context={'request': request}
    )

    total = sum(item.total_price for item in cart_items)

    return Response({
        'cart_items': serializer.data,
        'total_items': cart_items.count(),
        'total_price': total
    })


# ADD TO CART
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_cart(request):

    product_id = request.data.get('product_id')
    quantity = request.data.get('quantity', 1)

    try:
        quantity = int(quantity)

        if quantity < 1:
            return Response(
                {'error': 'Quantity must be at least 1'},
                status=status.HTTP_400_BAD_REQUEST
            )

    except (TypeError, ValueError):
        return Response(
            {'error': 'Invalid quantity'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        product = Product.objects.get(id=product_id)

    except (Product.DoesNotExist, ValueError, TypeError):
        return Response(
            {'error': 'Product not found'},
            status=status.HTTP_404_NOT_FOUND
        )

    cart_item, created = CartItem.objects.get_or_create(
        user=request.user,
        product=product,
        defaults={'quantity': quantity}
    )

    if not created:
        cart_item.quantity += quantity
        cart_item.save()

    serializer = CartItemSerializer(
        cart_item,
        context={'request': request}
    )

    return Response(
        serializer.data,
        status=status.HTTP_201_CREATED
    )


# UPDATE CART
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_cart(request, item_id):

    try:
        cart_item = CartItem.objects.get(
            id=item_id,
            user=request.user
        )

    except CartItem.DoesNotExist:
        return Response(
            {'error': 'Cart item not found'},
            status=status.HTTP_404_NOT_FOUND
        )

    try:
        quantity = int(request.data.get('quantity'))

        if quantity < 1:
            return Response(
                {'error': 'Quantity must be at least 1'},
                status=status.HTTP_400_BAD_REQUEST
            )

    except (TypeError, ValueError):
        return Response(
            {'error': 'Invalid quantity'},
            status=status.HTTP_400_BAD_REQUEST
        )

    cart_item.quantity = quantity
    cart_item.save()

    return Response(
        CartItemSerializer(cart_item).data,
        status=status.HTTP_200_OK
    )


# REMOVE CART ITEM
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_cart(request, item_id):

    try:
        cart_item = CartItem.objects.get(
            id=item_id,
            user=request.user
        )

    except CartItem.DoesNotExist:
        return Response(
            {'error': 'Cart item not found'},
            status=status.HTTP_404_NOT_FOUND
        )

    cart_item.delete()

    return Response({
        'message': 'Product removed from cart'
    })


# CLEAR CART
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def clear_cart(request):

    CartItem.objects.filter(
        user=request.user
    ).delete()

    return Response({
        'message': 'Cart cleared successfully'
    })
