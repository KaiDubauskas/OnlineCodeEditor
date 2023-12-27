import PocketBase from 'pocketbase';
const NEXT_PUBLIC_POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL
const pb = new PocketBase(`${NEXT_PUBLIC_POCKETBASE_URL}`);

async function login(email: string, password: string) {
    try {
        await pb.collection('users').authWithPassword(email, password);

        if (!pb.authStore.isValid)
            return null;

        return {
            isValid: true,
            userId: pb.authStore.model?.id,
        }

    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}

async function requestPasswordChange(email: string) {
    try {
        let result = await pb.collection('users').requestPasswordReset(email);
        console.log(result)
        return result
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}

async function createUser(email: string, password: string, passwordConfirm: string) {
    try {
        const user = await pb.collection('users').create({
            "email": email,
            "password": password,
            "passwordConfirm": passwordConfirm,
            "emailVisibility": true,
        });

        console.log(email)

        return user;
    } catch (error) {
        console.error('Error in creating account', error);
        return null;
    }
}

async function logout() {
    try {
        pb.authStore.clear();
    } catch (error) {
        console.error('Error logging out', error);
    }
}


async function savePythonFile(fileId: string, pyCode: string) {
    if (!pb.authStore.isValid)
        return null;

    const record = await pb.collection('python_files').update(fileId, {
        code: pyCode,
    });
    return record;

}

async function getPythonFiles(userId: string) {
    if (!pb.authStore.isValid)
        return null;

    try {
        const data = await pb.collection('python_files').getList(1, 50, { filter: `user = '${userId}'`, requestKey: null });
        return data?.items as any[];
    } catch (error) {
        console.error('Error fetching Python files:', error);
        return null;
    }
}

async function addPythonFile(userId: string, title: string) {
    if (!pb.authStore.isValid)
        return null;

    try {
        const record = await pb.collection('python_files').create({
            title: title,
            user: userId,
        });
        return record;
    } catch (error) {
        console.error('Error creating new file', error);
        return null
    }
}

async function deletePythonFile(fileId: string) {
    if (!pb.authStore.isValid) {
        return null;
    }

    try {
        let record = await pb.collection('python_files').delete(fileId);
        return record;
    } catch (error) {
        console.error('Error Deleting File', error);
        return null
    }

}

async function renamePythonFile(fileId: string, newTitle: string) {
    if (!pb.authStore.isValid) {
        return null;
    }

    try {
        let record = await pb.collection('python_files').update(fileId, { title: newTitle });
        return record;
    } catch (error) {
        console.error('Error Renaming File', error);
        return null
    }

}

export {
    login,
    // authLogin,
    requestPasswordChange,
    createUser,
    logout,
    getPythonFiles,
    savePythonFile,
    addPythonFile,
    deletePythonFile,
    renamePythonFile
};