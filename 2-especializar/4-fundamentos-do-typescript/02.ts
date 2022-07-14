function showTicket(user: string | null, ticket: number) {
    console.log(`Olá ${user ?? "Desconhecido"}! Bilhete: ${ticket}`)
}

showTicket(null,100)