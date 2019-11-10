import React from "react"
import styled from "@emotion/styled"
import { FaPinterest } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    margin: 0 30px 0 0;
  }
`
const SocialMedia = () => (
  <SocialMediaLinks>
    <h2>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.pinterest.co.uk/disappearingbarns/"
      >
        <FaPinterest />
      </a>
    </h2>

    <h2>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/DalesBarns">
        <FaTwitter />
      </a>
    </h2>
  </SocialMediaLinks>
)

export default SocialMedia
