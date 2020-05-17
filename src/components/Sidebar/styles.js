import styled from 'styled-components'

const Toolbar = styled.div`
  background-color: ${({ theme }) => theme.sidebarBackgroundColor};
  height: calc(100vh - 20px);
  width: 80px;
  border-radius: 20px;
  display: grid;
  
  div {
    margin: auto;
    
    :first-child { margin-top: 25px; }

    :last-child { margin-bottom: 25px; }
  }
`

const Image = styled.img`
  :hover {
    cursor: pointer;
  }
`

export { Toolbar, Image }
