import { ColorRing } from 'react-loader-spinner'

export default function LoadingIndicator() {
  return (
    <div className="absolute flex justify-center items-center h-32 w-32">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
      />
    </div>
  )
}