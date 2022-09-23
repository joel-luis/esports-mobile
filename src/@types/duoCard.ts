export interface DuoCardProps {
  hourEnd: string
  hourStart: string
  id: string
  name: string
  useVoiceChannel: boolean
  weekDays: string[]
  yearsPlaying: number
}

export interface Props {
  data: DuoCardProps
  onConnect: () => void
}
