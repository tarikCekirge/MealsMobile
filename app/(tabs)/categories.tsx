import { FlatList, ListRenderItem, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '@/data/dummy-data'
import Category from '@/models/category';
import CategoryGridTile from '@/components/CategoryGridTile';

const renderCategoryItem: ListRenderItem<Category> = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
};

const CategoriesScreen = () => {
    return (
        <View className='bg-[#25292e] flex-1'>

            <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />
        </View>
    )
}

export default CategoriesScreen