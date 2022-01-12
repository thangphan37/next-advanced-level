
function ServerSideRendering() {
	return (
		<div>This content is pre-rendered at each request.</div>
	)
}

export default ServerSideRendering

// this function make this page is server side rendering.
export function getServerSideProps() {
	return {
		props: null
	}
}