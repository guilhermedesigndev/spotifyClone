import styled from 'styled-components/native';

export const Container = styled.View`
  width: 160px;
  padding: 10px 0px;
  margin-right: 8px;
`;

export const Photo = styled.Image`
  width: 150px;
  height: 150px;
  background-color: #888;
  border-radius: 6px;
`;

export const ContainerSubTitle = styled.View`
  flex-direction: column;
  padding: 10px 0px;
`;

export const SubititleTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 2px 0px;
`;

export const SubititleDescription = styled.Text`
  color: #999;
  font-size: 12px;
`;
