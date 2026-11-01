import { SupportedLanguage } from '../types/recipe';

export interface Translations {
  siteTitle: string;
  tagline: string;
  searchPlaceholder: string;
  exploreRecipes: string;
  dynamicServing: string;
  adjustServings: string;
  servings: string;
  people: string;
  person: string;
  ingredients: string;
  instructions: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  difficulty: string;
  cuisine: string;
  calories: string;
  startCooking: string;
  exitCooking: string;
  nextStep: string;
  prevStep: string;
  stepOf: string;
  copyIngredients: string;
  copied: string;
  printRecipe: string;
  shareRecipe: string;
  addToShoppingList: string;
  addedToShoppingList: string;
  resetOriginal: string;
  chefTips: string;
  substitutions: string;
  storageTips: string;
  relatedRecipes: string;
  favorites: string;
  shoppingList: string;
  noFavorites: string;
  emptyShoppingList: string;
  clearAll: string;
  filterBy: string;
  all: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string;
  sweets: string;
  drinks: string;
  healthy: string;
  viewRecipe: string;
  timerStarted: string;
  done: string;
}

export const translations: Record<SupportedLanguage, Translations> = {
  en: {
    siteTitle: 'CookFood',
    tagline: 'Simple recipes, smart quantities, happier cooking.',
    searchPlaceholder: 'Search dishes, ingredients (e.g. paneer, dosa, biryani)...',
    exploreRecipes: 'Explore Recipes',
    dynamicServing: 'Dynamic Quantity Adapter',
    adjustServings: 'Adjust Servings',
    servings: 'Servings',
    people: 'people',
    person: 'person',
    ingredients: 'Ingredients',
    instructions: 'Step-by-Step Instructions',
    prepTime: 'Prep Time',
    cookTime: 'Cook Time',
    totalTime: 'Total Time',
    difficulty: 'Difficulty',
    cuisine: 'Cuisine',
    calories: 'Calories',
    startCooking: 'Start Cooking Mode',
    exitCooking: 'Exit Cooking Mode',
    nextStep: 'Next Step',
    prevStep: 'Previous Step',
    stepOf: 'Step',
    copyIngredients: 'Copy Ingredients',
    copied: 'Copied to Clipboard!',
    printRecipe: 'Print Recipe',
    shareRecipe: 'Share Recipe',
    addToShoppingList: 'Add to Shopping List',
    addedToShoppingList: 'Added to Shopping List!',
    resetOriginal: 'Reset to Original',
    chefTips: "Chef's Expert Tips",
    substitutions: 'Substitutions & Variations',
    storageTips: 'Storage & Reheating',
    relatedRecipes: 'You May Also Like',
    favorites: 'Favorites',
    shoppingList: 'Shopping List',
    noFavorites: 'No favorite recipes saved yet.',
    emptyShoppingList: 'Your shopping list is empty. Add ingredients from any recipe!',
    clearAll: 'Clear All',
    filterBy: 'Filter By',
    all: 'All',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snacks: 'Snacks',
    sweets: 'Sweets',
    drinks: 'Drinks',
    healthy: 'Healthy',
    viewRecipe: 'View Recipe',
    timerStarted: 'Timer Started',
    done: 'Done',
  },
  te: {
    siteTitle: 'కుక్ ఫుడ్',
    tagline: 'సులువైన వంటలు, ఖచ్చితమైన కొలతలు, ఆనందకరమైన వంట.',
    searchPlaceholder: 'వంటకాలు లేదా పదార్థాల కోసం వెతకండి (ఉదా: దోశ, పన్నీర్)...',
    exploreRecipes: 'వంటకాలు అన్వేషించండి',
    dynamicServing: 'పరిమాణ అనుకూలకం (Serving Adapter)',
    adjustServings: 'సర్వింగ్స్ మార్చండి',
    servings: 'సర్వింగ్స్',
    people: 'మందికి',
    person: 'వ్యక్తికి',
    ingredients: 'కావలసిన పదార్థాలు',
    instructions: 'తయారీ విధానం',
    prepTime: 'సిద్ధం సమయం',
    cookTime: 'వంట సమయం',
    totalTime: 'మొత్తం సమయం',
    difficulty: 'స్థాయి',
    cuisine: 'రుచి/ప్రాంతం',
    calories: 'క్యాలరీలు',
    startCooking: 'వంట విధానం ప్రారంభించండి',
    exitCooking: 'బయటకు రండి',
    nextStep: 'తరువాతి దశ',
    prevStep: 'మునుపటి దశ',
    stepOf: 'దశ',
    copyIngredients: 'పదార్థాలు కాపీ చేయండి',
    copied: 'కాపీ చేయబడింది!',
    printRecipe: 'ప్రింట్ చేయండి',
    shareRecipe: 'షేర్ చేయండి',
    addToShoppingList: 'షాపింగ్ లిస్ట్ కు జోడించండి',
    addedToShoppingList: 'షాపింగ్ లిస్ట్ కు చేర్చబడింది!',
    resetOriginal: 'యథావిధిగా మార్చండి',
    chefTips: 'వంట చిట్కాలు',
    substitutions: 'ప్రత్యామ్నాయాలు',
    storageTips: 'నిల్వ మరియు మళ్ళీ వేడి చేయడం',
    relatedRecipes: 'మరిన్ని రుచికరమైన వంటకాలు',
    favorites: 'ఇష్టమైనవి',
    shoppingList: 'షాపింగ్ జాబితా',
    noFavorites: 'ఇంకా ఏవీ ఇష్టమైనవిగా చేర్చలేదు.',
    emptyShoppingList: 'మీ షాపింగ్ జాబితా ఖాళీగా ఉంది.',
    clearAll: 'అన్నీ తొలగించు',
    filterBy: 'వడపోత',
    all: 'అన్నీ',
    breakfast: 'అల్పాహారం',
    lunch: 'మధ్యాహ్న భోజనం',
    dinner: 'రాత్రి భోజనం',
    snacks: 'స్నాక్స్',
    sweets: 'మిఠాయిలు',
    drinks: 'పానీయాలు',
    healthy: 'ఆరోగ్యకరం',
    viewRecipe: 'వంటకం చూడండి',
    timerStarted: 'టైమర్ ప్రారంభమైంది',
    done: 'పూర్తయింది',
  },
  ta: {
    siteTitle: 'குக்ஃபுட்',
    tagline: 'எளிய சமையல் குறிப்புகள், துல்லியமான அளவுகள், மகிழ்ச்சியான சமையல்.',
    searchPlaceholder: 'சமையல் குறிப்புகள் அல்லது பொருட்களைத் தேடுங்கள்...',
    exploreRecipes: 'சமையல் குறிப்புகளைப் பாருங்கள்',
    dynamicServing: 'அளவு மாற்றி (Serving Adapter)',
    adjustServings: 'பரிமாறும் அளவை மாற்றுக',
    servings: 'பரிமாறல்கள்',
    people: 'நபர்கள்',
    person: 'நபர்',
    ingredients: 'தேவையான பொருட்கள்',
    instructions: 'செய்முறை விளக்கம்',
    prepTime: 'தயாரிப்பு நேரம்',
    cookTime: 'சமைக்கும் நேரம்',
    totalTime: 'மொத்த நேரம்',
    difficulty: 'சிரமம்',
    cuisine: 'சமையல் வகை',
    calories: 'கலோரிகள்',
    startCooking: 'சமையல் பயன்முறை தொடங்கு',
    exitCooking: 'வெளியேறு',
    nextStep: 'அடுத்த படி',
    prevStep: 'முந்தைய படி',
    stepOf: 'படி',
    copyIngredients: 'பொருட்களை நகலெடு',
    copied: 'நகலெடுக்கப்பட்டது!',
    printRecipe: 'அச்சிடுக',
    shareRecipe: 'பகிர்',
    addToShoppingList: 'ஷாப்பிங் பட்டியலில் சேர்க்க',
    addedToShoppingList: 'பட்டியலில் சேர்க்கப்பட்டது!',
    resetOriginal: 'இயல்புநிலைக்கு மாற்றுக',
    chefTips: 'சமையல் குறிப்பு குறிப்புகள்',
    substitutions: 'மாற்றுப் பொருட்கள்',
    storageTips: 'சேமிப்பு முறைகள்',
    relatedRecipes: 'தொடர்புடைய சமையல் குறிப்புகள்',
    favorites: 'விருப்பங்கள்',
    shoppingList: 'ஷாப்பிங் பட்டியல்',
    noFavorites: 'விருப்பங்கள் எதுவும் இல்லை.',
    emptyShoppingList: 'ஷாப்பிங் பட்டியல் காலியாக உள்ளது.',
    clearAll: 'அனைத்தையும் நீக்கு',
    filterBy: 'வடிகட்டுதல்',
    all: 'அனைத்தும்',
    breakfast: 'காலை உணவு',
    lunch: 'மதிய உணவு',
    dinner: 'இரவு உணவு',
    snacks: 'சிற்றுண்டி',
    sweets: 'இனிப்புகள்',
    drinks: 'பானங்கள்',
    healthy: 'ஆரோக்கியமானது',
    viewRecipe: 'குறிப்பைப் பார்க்கவும்',
    timerStarted: 'நேரக் கணிப்பு தொடங்கியது',
    done: 'முடிந்தது',
  },
};
