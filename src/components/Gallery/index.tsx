import React from 'react';
import {FlatList, ActivityIndicator, View, Image, Text} from 'react-native';
import RenderImage from './RenderImage';
import {
  Container,
  StyledLoader,
  StyledEmptyCont,
  StyledEmptyText,
} from './styles';
import {ModalItemType, PayloadProps} from '../../types';
import {useDispatch} from 'react-redux';
import {giphs} from '../../store/actions';

interface GalleryProps {
  data: Array<any>;
  isLoading: boolean;
  setModal: (val: ModalItemType) => void;
  setParams: (val: PayloadProps) => void;
  paramData: PayloadProps;
}

export const Gallery = ({
  data = [],
  isLoading = false,
  setParams,
  setModal,
  paramData,
}: GalleryProps) => {
  const dispatch = useDispatch();
  const fetchMore = () => {
    if (!isLoading) {
      let obj = {
        ...paramData,
        offset: paramData.offset + 20,
      };
      setParams(obj);
      data.length > 19 && dispatch(giphs(obj));
    }
  };

  const renderItem = ({item}: any) => {
    return <RenderImage item={item} setModal={setModal} />;
  };

  const renderLoader = () => {
    return isLoading ? (
      <StyledLoader>
        <ActivityIndicator size="large" color="#7D8698" />
      </StyledLoader>
    ) : null;
  };

  const renderEmpty = () => {
    return !isLoading ? (
      <StyledEmptyCont>
        <Image
          source={{
            uri: 'https://media4.giphy.com/media/iFU36VwXUd2O43gdcr/200_d.gif?cid=d722ac79aaysld6i5qy1wo81445avjjawrjpxqjzo27flssn&rid=200_d.gif&ct=g',
          }}
          style={{width: 400, height: 200}}
        />
        <StyledEmptyText>Please type to search.</StyledEmptyText>
      </StyledEmptyCont>
    ) : null;
  };
  return (
    <Container>
      <FlatList
        keyExtractor={(key, index) => key.id + index}
        data={data}
        horizontal={false}
        numColumns={2}
        renderItem={renderItem}
        onEndReached={fetchMore}
        ListFooterComponent={renderLoader}
        refreshing={isLoading}
        ListEmptyComponent={renderEmpty}
      />
    </Container>
  );
};

export default React.memo(Gallery);
