import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StFooter>
      <span>©Copyright 2023 KMS99. All Rights Reserved.</span>
    </StFooter>
  );
};

const StFooter = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  text-align: center;
  font-size: 1.3rem;
`;

export default Footer;
