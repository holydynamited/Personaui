
type Props={
    value:string
}


export default function AboutCard({value}:Props){

    return(
        <div className="flex flex-col justify-center min-h-40
         text-body font-semibold text-primary gap-4
         bg-sidebar rounded-md border p-6 border-border-strong">

            <p className="text-body font-semibold text-primary">About</p>

            
                <p className="text-body leading-6 text-secondary">{value}</p>
          


        </div>
    )


}