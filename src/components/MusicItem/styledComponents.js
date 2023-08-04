import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`

export const MusicTrackImage = styled.img`
  height: 90px;
  width: 140px;
  margin-right: 20px;
`

export const NameGenreContainer = styled.div``

export const Name = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
`

export const Genre = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #3b82f6;
  line-height: 30px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  margin-right: 50px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
`
