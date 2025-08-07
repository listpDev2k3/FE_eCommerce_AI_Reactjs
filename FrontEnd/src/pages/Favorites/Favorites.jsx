import React from 'react'
import { useSelector } from 'react-redux'
import { emptyFavorites, removeFromFavorites } from '../../store/favorites/favoritesSlice'
import { useDispatch } from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './Favorites.module.scss'


const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items)
  console.log("favorites", favorites);
  return (
    <div>
      <h1>Favorites</h1>
      <ProductCard products={favorites} />
    </div>
  )
}

export default Favorites
                                                               