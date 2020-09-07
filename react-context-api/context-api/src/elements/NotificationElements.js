import styled from "styled-components";

// this is a styled component.
export const LoginNotificationWrapper = styled.div`
  display: ${(props) => (props.loggedIn ? "none" : "block")};
`;
