import React, {useEffect, useState} from 'react';
import {StatusBar, FlatList} from 'react-native';

import {Header} from 'react-native-elements';
import moment from 'moment';
import 'moment/locale/pt-br';

import {ButtonBack} from './styles';
import {CardDetail} from '../../components/CardDetail';
import {useFetch, api} from '../../services/api';
import Loading from '../../utils/Loading';
import Animation from '../../utils/Animation';
import Icon from 'react-native-vector-icons/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import typography from '../../config/typography';
import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';

import {persons} from './types/persons';
import {vehicles} from './types/vehicles';
import {planets} from './types/planets';
import {starships} from './types/starships';
import {films} from './types/films';
import {species} from './types/species';
import {Actions} from 'react-native-router-flux';

import {useSelector} from 'react-redux';

interface DetailProps {
  title: string;
  url: string;
  typeOf: string;
  indexRow: number;
}

const Detail = ({title, typeOf, indexRow}: DetailProps) => {
  const ITEM_DATA = useSelector(
    (state: {ItemData: any}) => state.ItemData.itemData,
  );
  const DATA = ITEM_DATA[indexRow];
  const {data: planet} = useFetch(DATA.homeworld);

  if (!DATA) {
    return (
      <Container>
        <Loading visible={true} />
      </Container>
    );
  }

  const getData = () => {
    if (typeOf === 'people') return persons;
    if (typeOf === 'planets') return planets;
    if (typeOf === 'starships') return starships;
    if (typeOf === 'films') return films;
    if (typeOf === 'vehicles') return vehicles;
    if (typeOf === 'species') return species;
  };

  return (
    <>
      <Header
        leftComponent={
          <ButtonBack onPress={() => Actions.pop()}>
            <Icon name="arrow-left" color={colors.white} size={32} />
          </ButtonBack>
        }
        centerComponent={{
          text: `${title}`,
          style: {
            color: colors.white,
            fontSize: 20,
            fontFamily: typography.bold,
            marginTop: 10,
          },
        }}
        containerStyle={{
          backgroundColor: colors.primary,
          borderBottomWidth: 0,
        }}
      />
      <Container>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor={colors.darkBlue}
        />
        <Animation>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.name}
            contentContainerStyle={{
              alignItems: 'center',
              paddingBottom: getStatusBarHeight(true),
            }}
            data={getData()}
            renderItem={({item}) => (
              <CardDetail
                title={item.name}
                description={
                  item.param === 'homeworld'
                    ? planet && planet.name
                    : item.param === 'people'
                    ? DATA[item.param].length
                    : item.param === 'characters'
                    ? DATA[item.param].length
                    : item.param === 'release_date'
                    ? moment(DATA[item.param]).format('d MMMM YYYY')
                    : DATA[item.param]
                }
                color={colors.darkBlue}
                icon={item.icon}
                onPress={() => console.log}
              />
            )}
          />
        </Animation>
      </Container>
    </>
  );
};

export default Detail;
