import { errorCatch } from "@/api/api.helpers"
import { toast } from "react-toastify"


export const toastError = (error: any) => {
  const message = errorCatch(error)
  toast.error(message)
  throw message
}