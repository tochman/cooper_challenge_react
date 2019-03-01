module.exports = {
  mockedUserResponses: [
    {
      status: 200,
      headers: {
        "access-token": "AfJSIl6P1CYM0Qc0vmTfXQ",
        client: "aGh-lsYlUZasOM3mcil9cQ",
        expiry: "1550652483",
        uid: "johndoe@mail.com",
        "token-type": "Bearer"
      },
      body: JSON.stringify({
        data: {
          id: 1,
          email: "johndoe@mail.com",
          provider: "email",
          uid: "johndoe@mail.com"
        }
      })
    }
  ],

  missingUserResponse: {
    status: 401,
    headers: {},
    body: JSON.stringify({
      success: false,
      errors: ["Invalid login credentials. Please try again."]
    })
  }
};
