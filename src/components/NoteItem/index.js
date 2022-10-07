// Write your code here
import {
  CourseContainer,
  CourseName,
  CourseDescription,
} from './styledComponents'

const NoteItem = props => {
  const {courseDetails} = props
  const {courseName, aboutCourse} = courseDetails

  return (
    <CourseContainer>
      <CourseName>{courseName}</CourseName>
      <CourseDescription>{aboutCourse}</CourseDescription>
    </CourseContainer>
  )
}

export default NoteItem
