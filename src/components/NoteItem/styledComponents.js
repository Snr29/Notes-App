// Style your elements here
import styled from 'styled-components'

export const CourseContainer = styled.li`
  background-color: #ffffff;
  border: 1px solid #aab8c8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 190px;
  padding: 15px;
  list-style-type: none;
  margin-left: 0px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 130px;
    margin-right: 0px;
    margin-bottom: 20px;
  }
`
export const CourseName = styled.h1`
  color: #1e293b;
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const CourseDescription = styled.p`
  color: #334155;
  font-size: 12px;
  line-height: 0.5px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
