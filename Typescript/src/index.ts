import Student from './model/Student.js'
import Class from './model/Class.js'

const studentsUrl = 'http://192.168.0.103:8080/student/list'
const classesUrl = 'http://192.168.0.103:8080/class/list'

const fetchBtn = document.querySelector('.fetchBtn')
const spinner: HTMLElement | null = document.querySelector('.spinner')

let data = []
let students: Student[] = []
let classes: Class[] = []

// const createDropdownList = () => {}

// const toggleSpinner = () => {
//   if (spinner) {
//     let spinnerState = spinner.style.display
//     spinnerState = spinnerState === 'block' ? 'none' : 'block'
//   }
// }

const fetchData = async () => {
  try {
    const response = await fetch(studentsUrl)
    data = await response.json()
    let fetchedStudents = await data.data.students
    fetchedStudents.forEach((student: Student) =>
      students.push(new Student(student.name, student.house))
    )
    console.log(data)
    console.log(students)
  } catch (e) {
    console.error(e)
  }
}

const fetchClasses = async () => {
  if (spinner) {
    spinner.style.display = 'block'
  }
  try {
    const response = await fetch(classesUrl)
    data = await response.json()
    let fetchedClasses = await data.data.classes
    fetchedClasses.forEach((hpClass: Class) =>
      classes.push(new Class(hpClass.name, hpClass.teacher))
    )
    console.log(data)
    console.log(classes)
    if (spinner) {
      spinner.style.display = 'none'
    }
  } catch (e) {
    console.error(e)
  }
}

fetchBtn?.addEventListener('click', fetchData)

document.addEventListener('DOMContentLoaded', fetchClasses)
