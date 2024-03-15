import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

const CoffeeCard = ({name, rating, imageURL}) => {
  return (
        // <LinearGradient  colors={[COLORS.primaryTransparentHex, COLORS.primaryTransparentHex]}>
           
            
        <ImageBackground source={imageURL} style={styles.CoffeeCard}>
          <View style={styles.ratingBadge}>
            <Entypo name="star" size={15} color={COLORS.primaryOrangeHex} style={styles.starIcon}/>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </ImageBackground>
        // </LinearGradient>
  );
};
const styles = StyleSheet.create({
  CoffeeCard: {
    width: 150,
    height: 150,
    margin: SPACING.space_10,
    borderRadius: SPACING.space_15,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top:0,
    right:0,
    paddingVertical: SPACING.space_6,
    paddingHorizontal: SPACING.space_10,
    backgroundColor: COLORS.secondaryGreyHex,
    borderBottomLeftRadius: SPACING.space_15,
  },
  ratingText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_12,
    paddingHorizontal: SPACING.space_5,
    fontWeight: 'bold',
    },
});

export default CoffeeCard;
