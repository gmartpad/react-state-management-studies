import { ColorRing } from 'react-loader-spinner'

export default function SuspenseFallback() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6']}
      />
    </div>
  )
}