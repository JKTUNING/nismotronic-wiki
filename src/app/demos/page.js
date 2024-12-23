export default function Page() {
  return (
    <div className='w-full gap-4 p-4'>
      <h1 className='w-full text-center text-4xl font-bold'>Demo Videos</h1>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-10 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <div className='aspect-video w-full shadow-lg shadow-primary/20'>
          <iframe className='h-full w-full rounded-lg' src='https://www.youtube.com/embed/IwOqHKs13AY' title='NismoTronicSA Setup' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        </div>
        <div className='aspect-video w-full shadow-lg shadow-primary/20'>
          <iframe className='h-full w-full rounded-lg' src='https://www.youtube.com/embed/ww9C0TurPF0' title='NismoTronicSA SD Fueling' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        </div>
        <div className='aspect-video w-full shadow-lg shadow-primary/20'>
          <iframe className='h-full w-full rounded-lg' src='https://www.youtube.com/embed/t4GL4RxJdCc' title='NismoTronicSA Initial Startup' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        </div>
        <div className='aspect-video w-full shadow-lg shadow-primary/20'>
          <iframe className='h-full w-full rounded-lg' src='https://www.youtube.com/embed/9PCixP2qQNU' title='NismoTronicSA Idle Overview' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        </div>
        <div className='aspect-video w-full shadow-lg shadow-primary/20'>
          <iframe className='h-full w-full rounded-lg' src='https://www.youtube.com/embed/V1ngs4d8LFM' title='eTune Guide' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        </div>
      </div>
    </div>
  )
}
