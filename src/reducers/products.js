import {
  LIST_PRODUCTS,
  SET_LIST_PRODUCTS,
  FILTER_PRODUCTLIST,
  LIST_PRODUCTS_TOPSLIDER,
  LIST_PRODUCTS_HOT,
  SETSTATE_LIST_PRODUCTS,
  PRODUCT_PAGE_UNLOADED,
  LIST_PRODUCTS_TAGS,
  SETSTATE_BLOCK_LIST_PRODUCTS
} from '../constants/ActionType'
const initialState = {
  setState: {
    name: '',
    supplier: '',
    minPrice: '',
    maxPrice: '',
    hot: false,
    inSlider: false,
    tags: ''
  }
}
export default function NewsReducers(state = initialState, action) {
  switch (action.type) {
    case LIST_PRODUCTS:
      return {
        ...state,
        pager: action.pager,
        listproducts: action.payload.data.productList || [],
        total: action.payload.data.total || 0,
        page: 0,
        reload: false
      }
    case LIST_PRODUCTS_TOPSLIDER:
      return {
        ...state,
        listProductsTopSlider: action.payload.data.productList || []
      }
    case LIST_PRODUCTS_HOT:
      return {
        ...state,
        listProductHot: action.payload.data.productList || []
      }
    case SET_LIST_PRODUCTS:
      return {
        ...state,
        listproducts: action.payload.data.productList || [],
        total: action.payload.data.total || 0,
        page: action.page
      }
    case FILTER_PRODUCTLIST:
      return {
        ...state,
        listproducts: action.payload.data.productList || [],
        total: action.payload.data.total || 0
      }
    case SETSTATE_LIST_PRODUCTS:
      return {
        ...state,
        setState: { ...state.setState, [action.key]: action.value }
      }
    case SETSTATE_BLOCK_LIST_PRODUCTS:
      return {
        ...state,
        setState: {
          ...state.setState,
          [action.key]: action.value,
          [action.minPrice]: action.valueMinPrice,
          [action.maxPrice]: action.valueMaxPrice,
          [action.open]: action.value,
          [action.tags]: action.valueTags,
          [action.name]: action.valueName
        }
      }
    case LIST_PRODUCTS_TAGS:
      return {
        ...state,
        listproducts: action.payload.data.productList || [],
        total: action.payload.data.total || 0
      }
    case PRODUCT_PAGE_UNLOADED:
      return {}
    default:
      return state
  }
}
