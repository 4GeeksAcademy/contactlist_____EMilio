const getState = ({ getStore, getActions, setStore, getContact, updateContact }) => {
	return {
		store: {
			contact: [],
			urlBase: "https://playground.4geeks.com/apis/fake/contact/",
		},
		actions: {
			getContact: async () => {
				try {
					let response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/{contact_id}"
					);
					let data = await response.json();

					setStore({
						contact: data,
					});
				} catch (error) {
					console.log(error);
				}
			},
			getAllContact: async () => {
				try {
					let response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/agenda/emilio_agenda"
					);
					if (response.ok) {
						let data = await response.json();
						setStore({
							contact: data,
						})
					}

				} catch (error) {
				}
			},

			deleteContact: async (contact_id) => {
				try {
					let response = await fetch(
						`https://playground.4geeks.com/apis/fake/contact/${contact_id}`,
						{
							method: "DELETE"
						}
					);
					getActions().getAllContact();
				} catch (error) {
					console.log(error)
				}
			},

			createContact: async (data) => {
				console.log(data);
				try {
					let response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(data)
						}
					)

					if (response.ok) {
						getActions().getAllContact()
					}

				} catch (error) {
					console.log(error)
				}
			},

			updateContact: async (contact, id) => {
				console.log(contact, id);
				try {
					let response = await fetch(
						`https://playground.4geeks.com/apis/fake/contact/${id}`,
						{
							method: "PUT",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(contact)
						}
					)

					if (response.ok) {
						getActions().updateContact()
					}

				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
