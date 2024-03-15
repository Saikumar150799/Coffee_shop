import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTFAMILY, SPACING} from '../theme/theme';
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CoffeeCard from '../components/CoffeeCard';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState(['All', 'One', 'Two', 'Three']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <SafeAreaView style={styles.Container}>
      <Header />

      <Text style={styles.HeaderText}>Find the best {'\n'}coffee for you</Text>

      {/* search Input */}
      <View style={styles.searchInputContainer}>
        <View styles={styles.searchIcon}>
          <FontAwesome
            name="search"
            size={15}
            color={
              searchText.length > 0
                ? COLORS.primaryOrangeHex
                : COLORS.primaryLightGreyHex
            }
          />
        </View>
        <View>
          <TextInput
            placeholder="Find your coffee..."
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.searchInput}
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
      </View>

      {/* categories */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={{
                ...styles.categories,
                ...{
                  color:
                    selectedCategory === category
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryWhiteHex,
                },
              }}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CoffeeData.map((coffee, index) => (
          <CoffeeCard
            key={index}
            name={coffee.name}
            rating={coffee.average_rating}
            imageURL={coffee.imagelink_square}
          />
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {BeansData.map((bean, index) => (
          <CoffeeCard
            key={index}
            name={bean.name}
            rating={bean.average_rating}
            imageURL={bean.imagelink_square}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    paddingHorizontal: 10,
  },
  HeaderText: {
    color: COLORS.primaryWhiteHex,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.space_20,
    padding: SPACING.space_10,
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: SPACING.space_10,
  },
  searchIcon: {
    marginHorizontal: SPACING.space_10,
  },
  searchInput: {
    color: COLORS.primaryWhiteHex,
    marginHorizontal: SPACING.space_10,
  },
  categories: {
    color: COLORS.primaryWhiteHex,
    marginHorizontal: SPACING.space_8,
    marginVertical: SPACING.space_20,
    fontWeight: 'bold',
  },
});
export default HomeScreen;
