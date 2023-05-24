<template>
    <section class="h-100 gradient-custom">
        <div class="container py-5 color">
            <div class="row d-flex justify-content-center my-4 color">
                <div class="col-md-8 color">
                    <div class="card mb-4 color">
                        <div class="card-header py-3 color">
                            <h5 class="mb-0">Cart - {{ cartItems.length }} items</h5>
                        </div>
                        <div class="card-body color">
                            <!-- Single item -->
                            <div v-for="item in cartItems" :key="item.id" class="row">
                                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">

                                    <!-- Image -->
                                    <div class="bg-image hover-overlay hover-zoom ripple rounded"
                                        data-mdb-ripple-color="light">
                                        <img :src="item.image" class="w-100" alt="" />
                                        <a href="#!">
                                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                                        </a>
                                    </div>
                                    <!-- Image -->
                                </div>

                                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0 color">
                                    <!-- Data -->
                                    <p><strong>{{ item.name }}</strong></p>

                                    <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                        title="Remove item" @click="removeFromCart(item)">
                                        <i class="fas fa-trash"></i>
                                    </button>

                                    <!-- Data -->
                                </div>

                                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 color">
                                    <!-- Quantity -->
                                    <div class="d-flex mb-4" style="max-width: 300px color">
                                        <button class="btn btn-dark px-3 me-2" @click="decrementQuantity(item)">
                                            <i class="fas fa-minus"></i>
                                        </button>

                                        <div class="form-outline color">
                                            <input :id="'form-' + item.id" min="0" name="quantity" :value="item.quantity"
                                                type="number" class="form-control" />
                                            <label class="form-label" :for="'form-' + item.id">Quantity</label>
                                        </div>

                                        <button class="btn btn-dark px-3 ms-2" @click="incrementQuantity(item)">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <!-- Quantity -->

                                    <!-- Price -->
                                    <p class="text-start text-md-center color">
                                        <strong>{{ item.price }}</strong>
                                    </p>
                                    <!-- Price -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 color">
                    <div class="card mb-4">
                        <div class="card-header py-3 color">
                            <h5 class="mb-0">Summary</h5>
                        </div>
                        <div class="card-body color">
                            <ul class="list-group list-group-flush color">
                                <li v-for="item in cartItems" :key="item.id"
                                    class="list-group-item d-flex justify-content-between align-items-center color">
                                    {{ item.name }}
                                    <span class="badge bg-primary rounded-pill">{{ item.quantity }}</span>
                                </li>
                            </ul>

                            <p class="text-end">
                                <strong>Total: {{ cartTotal }}</strong>
                            </p>

                            <button type="button" class="btn btn-dark btn-lg btn-block">
                                Go to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import { useCartStore } from '@/stores/cartStore';
import { computed, onMounted } from 'vue';

export default {
    name: 'BuyCartView',
    setup() {
        const cartStore = useCartStore();

        // Propiedad computada para obtener los elementos del carrito con precios generados inicialmente
        const cartItems = computed(() => {
            return cartStore.cartItems.map(item => {
                if (!item.price) {
                    const randomPrice = (Math.random() * (20 - 1) + 1).toFixed(2); // Generar número aleatorio entre 1 y 20 con dos decimales
                    item.price = randomPrice; // Guardar el precio generado inicialmente en el objeto del producto
                }
                return item;
            });
        });

        const cartTotal = computed(() => {
            return cartItems.value.reduce((total, item) => total + parseFloat(item.price), 0);
        });

        const removeFromCart = (item) => {
            cartStore.removeFromCart(item);
        };

        const incrementQuantity = (item) => {
            cartStore.incrementQuantity(item);
        };

        const decrementQuantity = (item) => {
            cartStore.decrementQuantity(item);
        };

        return {
            cartItems,
            cartTotal,
            removeFromCart,
            incrementQuantity,
            decrementQuantity
        };
    },
};


</script>