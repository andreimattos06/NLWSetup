interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps){

    const progressStyle = {
        width: `${props.progress}%`
    }
    return(

        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <div className='h-3 rounded-xl bg-violet-600 transition-all' style={progressStyle} ></div>
        </div>
    )
}