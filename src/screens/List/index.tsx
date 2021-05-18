import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {Header} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {FlatList} from 'react-native-gesture-handler';

import ItemList from '../../components/ItemList';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {ButtonBack} from './styles';

import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';
import typography from '../../config/typography';
import {useFetch} from '../../services/api';
import Loading from '../../utils/Loading';
import Animation from '../../utils/Animation';
import Icon from 'react-native-vector-icons/Feather';

import {useDispatch} from 'react-redux';
import {actions} from '../../store/actions';

interface ListProps {
  title: string;
  params: Array<object>;
}

const List = ({title, params}: ListProps) => {
  const dispatch = useDispatch();
  const {data} = useFetch(params.urlData);

  // Dispatchers
  const dispatchItemData = (payload: String) =>
    dispatch(actions.itemData(payload));

  if (!data) {
    return (
      <Container>
        <Loading visible={true} />
      </Container>
    );
  } else {
    dispatchItemData(data.results);
  }

  const cutUrl = (url: string) => {
    var cutUrl = url.replace('http://swapi.dev/api/', '');
    return cutUrl;
  };

  const getUserNameToAvatar = (value: string) => {
    if (!value) {
      return '';
    }
    if (value.length > 0 && value.split(' ')) {
      const split = value.split(' ');
      const firstname = split[0].charAt(0).toUpperCase();
      const lastname = split[split.length - 1].charAt(0).toUpperCase();
      return firstname + lastname;
    }
    return value.length > 0 ? value.charAt(0) : '';
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
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: getStatusBarHeight(true)}}
            data={data.results}
            renderItem={({item, index}) => (
              <ItemList
                title={item[params.name]}
                description={item[params.desc]}
                imageText={getUserNameToAvatar(item[params.name])}
                onPress={() =>
                  Actions.detail({
                    title: item[params.name],
                    url: cutUrl(item.url),
                    typeOf: params.urlData,
                    indexRow: index,
                  })
                }
              />
            )}
            keyExtractor={item => `${item.name}`}
          />
        </Animation>
      </Container>
    </>
  );
};

export default List;
