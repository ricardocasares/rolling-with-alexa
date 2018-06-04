export const WithoutTopNumber = {
  request: {
    type: "IntentRequest",
    intent: {
      name: "TopSpeakers",
      slots: {
        top: {
          value: "?"
        }
      }
    }
  }
};

export const WithTop2 = {
  request: {
    type: "IntentRequest",
    intent: {
      name: "TopSpeakers",
      slots: {
        top: {
          value: "2"
        }
      }
    }
  }
};

export const WithTop4 = {
  request: {
    type: "IntentRequest",
    intent: {
      name: "TopSpeakers",
      slots: {
        top: {
          value: "4"
        }
      }
    }
  }
};
