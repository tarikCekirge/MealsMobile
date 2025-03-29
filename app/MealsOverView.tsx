import { MEALS, CATEGORIES } from '@/data/dummy-data';
import { FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MealItem from '@/components/MealItem';
import Container from '@/components/Container';
import { RootStackParamList } from './_layout';
import { useLayoutEffect } from 'react';

type Meal = {
    id: string;
    title: string;
    imageUrl: string;
    ingredients: string[];
    steps: string[];
    categoryIds: string[];
    duration: number;
    complexity: string;
    affordability: string;
};

type MealsOverViewProps = NativeStackScreenProps<RootStackParamList, 'MealsOverView'>;

const MealsOverViewScreen: React.FC<MealsOverViewProps> = ({ route, navigation }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title || 'Category';

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])



    const renderCategoryItem = ({ item }: { item: Meal }) => {
        return <MealItem itemData={item} />;
    };

    return (
        <Container>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
            />
        </Container>
    );
};

export default MealsOverViewScreen;
