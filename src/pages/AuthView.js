import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import AuthForm from "components/AuthForm"


const StyledView = styled.div`
  max-width: 400px;
  margin: 1rem auto;
  form{
    display:flex;
    flex-direction:column;
  }
`

const Style = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`

const StyledLink = styled(NavLink).attrs({
  activeClassName: "active"
})`
  background-color: lightgray;

  &.active {
    background-color: white;
  }
`

export default function AuthView(props) {
  const [user, setUser] = useState({ email: "", password: "" })
  const saveToken = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email)
  }

  return (
    <StyledView>
      <Style>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/signup">Signup</StyledLink>
      </Style>
      <AuthForm
        {...props}
        user={user}
        setUser={setUser}
        signup={props.signup}
        saveToken={saveToken}
      />
    </StyledView>
  )
}
