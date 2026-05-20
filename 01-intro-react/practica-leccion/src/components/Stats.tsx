
type StatsTypesProps ={
    icon: string,
    count: number
}

function Stats({icon,count} : StatsTypesProps) {

  return (
    <div className="flex items-center gap-2">
        <img src={icon} />
        <h3 className="font-medium text-[15px]">{count}</h3>
    </div>
  )
}

export default Stats