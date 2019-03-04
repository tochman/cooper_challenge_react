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
  savingEntryResponse: {
    status: 200,
    headers: {},
    body: JSON.stringify({
      message: "all good"
    })
  },

  missingUserResponse: {
    status: 401,
    headers: {},
    body: JSON.stringify({
      success: false,
      errors: ["Invalid login credentials. Please try again."]
    })
  },

  performanceDataIndexResponse: {
    status: 200,
    headers: {},
    body: JSON.stringify({
      entries: [
        {
          data: {
            message: "Below Average"
          },
          id: 1,
          user_id: 1
        },
        {
          data: {
            message: "Average"
          },
          id: 2,
          user_id: 1
        },
        {
          data: {
            message: "Above Average"
          },
          id: 3,
          user_id: 1
        }
      ]
    })
  }
};
