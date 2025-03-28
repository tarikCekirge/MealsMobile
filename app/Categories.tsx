import { FlatList, ListRenderItem, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '@/data/dummy-data'
import Category from '@/models/category';
import CategoryGridTile from '@/components/CategoryGridTile';
import Container from '@/components/Container';



const CategoriesScreen = ({ navigation }: any) => {

    const renderCategoryItem: ListRenderItem<Category> = (itemData) => {

        const pressHandler = () => {
            navigation.navigate('MealsOverView', {
                categoryId: itemData.item.id
            })
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} navigation={navigation} />
    };


    return (
        <Container>

            <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem.bind(this)} numColumns={2} />
        </Container>
    )
}

export default CategoriesScreen