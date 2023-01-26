import { PlaceHolderPaper } from "./common.styled"

export default function PlaceHolders({ no }: { no: number }) {
    return (
      <>{
        [...Array(no)].map((_, i) => (
            <PlaceHolderPaper key={i} sx={{ height: "100px" }} />
        ))
      }</>
    )
  } 