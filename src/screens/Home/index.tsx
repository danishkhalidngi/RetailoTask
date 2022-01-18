import React from 'react';
import {Input, Gallery} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {giphs} from '../../store/actions';
import {Overlay} from '../../components/Modal';
import {GiphsReducerType} from '../../types';
import {Container} from './styles';
import _ from 'lodash';

const Home = () => {
  const giphsState = useSelector((state: GiphsReducerType) => state?.Giphs);
  const [inputValue, setInpuValue] = React.useState(giphsState.search);
  const [paramData, setParamData] = React.useState({
    search: giphsState.search,
    limit: 20,
    offset: Number(giphsState?.paginationObj?.offset),
  });
  const [modalItem, setModal] = React.useState({
    isVisible: false,
    data: {},
  });

  const dispatch = useDispatch();

  const fetchData = () => {
    const dalayFn = setTimeout(() => {
      dispatch(giphs(paramData));
    }, 2000);
    return () => clearTimeout(dalayFn);
  };

  React.useEffect(() => {
    if (giphsState.search !== inputValue) {
      fetchData();
    }
  }, [inputValue]);

  const onChangeHandler = (val: string) => {
    const letters = /^[A-Za-z]+$/;

    if (val.match(letters) || val === '') {
      setInpuValue(val);
      if (val === '') {
        setParamData({
          ...paramData,
          search: val,
          offset: 0,
        });
      } else {
        setParamData({
          ...paramData,
          search: val,
        });
      }
    }
  };

  const uniqueData = _.uniqBy(giphsState?.giphsData, 'id');
  return (
    <Container>
      <Input
        placeholder="Search GIPHY"
        value={inputValue}
        onChange={onChangeHandler}
      />
      <Gallery
        data={uniqueData ?? []}
        isLoading={giphsState?.loading}
        setModal={setModal}
        setParams={setParamData}
        paramData={paramData}
      />
      <Overlay item={modalItem} setModal={setModal} />
    </Container>
  );
};

export default Home;
