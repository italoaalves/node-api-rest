import { Router } from "express"

const router = Router()

router.get("/", (req, res, next) => {
    res.status(200).send({
        mesage: "ok"
    })
})

router.get("/:id", (req, res, next) => {
    const id = req.params.id

    res.status(200).send({
        mesage: "ok",
        id: id
    })
})

router.post("/", (req, res, next) => {
    res.status(200).send({
        mesage: "ok"
    })
})

router.patch("/", (req, res, next) => {
    res.status(200).send({
        mesage: "ok"
    })
})

export default router