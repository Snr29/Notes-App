// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const NotesMainContainer = styled.div`
  width: 85%;
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 92%;
  }
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 50px;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`
export const FormContainer = styled.form`
  background: #ffffff;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-shadow: 0px 5px 15px rgba(7, 7, 7, 0.5);
  border-radius: 5px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    height: 240px;
  }
`

export const CourseNameInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    height: 20px;
    font-size: 11px;
  }
`

export const CourseTextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  margin-top: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    font-size: 11px;
    font-weight: 500;
  }
`

export const AddButton = styled.button`
  background: #4c63b6;
  height: 30px;
  width: 60px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 12px;
  color: #ffffff;
  align-self: flex-end;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 90px;
    height: 40px;
    font-size: 16px;
  }
`

export const CoursesListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
  margin-left: 0px;
  width: 100%;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    height: 350px;
  }
`

export const EmptyListImage = styled.img`
  height: 100px;
  @media screen and (min-width: 768px) {
    height: 150px;
  }
`
export const EmptyListHeading = styled.h1`
  color: #334155;
  font-size: 22px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const EmptyListParagraph = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 0.5px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
