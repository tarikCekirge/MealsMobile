import { FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import { CATEGORIES } from '@/data/dummy-data'
import Category from '@/models/category';
import CategoryGridTile from '@/components/CategoryGridTile';

const renderCategoryItem: ListRenderItem<Category> = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
};

const CategoriesScreen = () => {
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />
    )
}

export default CategoriesScreen