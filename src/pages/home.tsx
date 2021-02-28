/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const titleStyle = css`color:red;`;

function Home(): JSX.Element {
    return <div className="Home" css={{color: 'green'}}>Home<div css={titleStyle}>Home</div></div>
}

export default Home
