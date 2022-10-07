// Write your code here
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import {
  Container,
  NotesMainContainer,
  NotesHeading,
  FormContainer,
  CourseNameInput,
  CourseTextArea,
  AddButton,
  CoursesListContainer,
  EmptyListContainer,
  EmptyListImage,
  EmptyListHeading,
  EmptyListParagraph,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [courseName, changeCourseName] = useState('')
  const [aboutCourse, changeCourseDescription] = useState('')
  const [coursesList, onSubmitCourseList] = useState([])

  const onChangeCourseName = event => changeCourseName(event.target.value)

  const onChangeCourseDescription = event =>
    changeCourseDescription(event.target.value)

  const onSubmitCourseDetails = event => {
    event.preventDefault()

    const newCourse = {
      id: uuidv4(),
      courseName,
      aboutCourse,
    }

    onSubmitCourseList(prevCourseList => [...prevCourseList, newCourse])
    changeCourseName('')
    changeCourseDescription('')
  }

  const courseListLength = coursesList.length

  const courses = courseListLength < 1

  const CoursesList = () => (
    <CoursesListContainer>
      {coursesList.map(eachCourse => (
        <NoteItem key={eachCourse.id} courseDetails={eachCourse} />
      ))}
    </CoursesListContainer>
  )

  const EmptyCoursesList = () => (
    <EmptyListContainer>
      <EmptyListImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyListHeading>No Notes Yet</EmptyListHeading>
      <EmptyListParagraph>Notes you add will appear here</EmptyListParagraph>
    </EmptyListContainer>
  )

  return (
    <Container>
      <NotesMainContainer>
        <NotesHeading>Notes</NotesHeading>
        <FormContainer onSubmit={onSubmitCourseDetails}>
          <CourseNameInput
            value={courseName}
            placeholder="Title"
            onChange={onChangeCourseName}
          />
          <CourseTextArea
            value={aboutCourse}
            rows="8"
            placeholder="Take a Note..."
            onChange={onChangeCourseDescription}
          />
          <AddButton type="submit">Add</AddButton>
        </FormContainer>
        {courses ? EmptyCoursesList() : CoursesList()}
      </NotesMainContainer>
    </Container>
  )
}

export default Notes
