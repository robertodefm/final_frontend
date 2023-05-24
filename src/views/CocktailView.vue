

 <template>
  <div class="container my-4">
    <h2 class="mb-4">Selected Cocktail</h2>
    <div v-if="cocktail.selectedCocktail" class="text-center d-flex">
      <div>
        <img :src="cocktail.selectedCocktail.strDrinkThumb" :alt="cocktail.selectedCocktail.strDrink" class="img-fluid">
        <h3 class="mt-3">{{ cocktail.selectedCocktail.strDrink }}</h3>
      </div>
      <div>
        <p class="card-text">{{ cocktail.selectedCocktail.strInstructions }}</p>
        <ul>
          <li v-for="(ingredient, index) in filteredIngredients" :key="index">
            <img :src="getIngredientImage(ingredient.name)" :alt="ingredient.name" class="ingredient-image">
            <span class="ingredient-name">{{ ingredient.name }}</span>
            <span> - </span>
            <span class="ingredient-measure">{{ ingredient.measure }}</span>
          </li>
        </ul>
      </div>
    </div>

   
    <button @click="addToCart(cocktail.selectedCocktail)">Add to cart</button>
  </div>
</template>

<script>
import { useCocktailsStore } from '@/stores/cocktailsStore';
import { useCartStore } from '@/stores/cartStore';
import { computed } from 'vue';
import { useRouter, RouterLink } from 'vue-router'


export default {
  name: 'CocktailView',
  setup() {
    const cocktailsStore = useCocktailsStore();
    const cartStore = useCartStore();
    
    const filteredIngredients = computed(() => {
      return Object.entries(cocktailsStore.selectedCocktail)
      .filter(([key, value]) => {
        return key.startsWith('strIngredient') && value !== null;
      })
      .map(([key, value]) => ({
        name: value,
        measure: cocktailsStore.selectedCocktail[`strMeasure${key.slice(13)}`],
      }));
    });
    
    const router = useRouter()
    const getIngredientImage = (ingredient) => {
      const ingredientName = ingredient.toLowerCase();
      return `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`;
    };

    const addToCart = (cocktail) => {
      
      const cartItem = {
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        image: cocktail.strDrinkThumb,
        quantity: 1,
      };

      cartStore.addToCart(cartItem);
      router.push('/buycart');
    };

    return {
      cocktail: cocktailsStore,
      filteredIngredients,
      getIngredientImage,
      addToCart,
    };
  },
};
</script>
