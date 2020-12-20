/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import './styles.scss'

interface Props{

}
interface State {
    students: any
}

class Tables extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
      ],
    }
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.students[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
        <table>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
    )
  }
}

export default Tables