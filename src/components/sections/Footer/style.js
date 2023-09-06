import styled from 'styled-components';

export const FooterWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
.div-1 {
  .image-container {
    border-radius: 8px;
    overflow: hidden;
    object-fit: contain;
    img {
      width: 75px;
      height: 75px;
    }
  }
  .text {
    font-size: 18px;
    color: #4827D7
  }
}
`;