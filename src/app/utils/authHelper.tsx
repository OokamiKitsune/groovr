import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export async function getUserSession(cookies: any) {
    const supabase = createServerComponentClient({ cookies });
    // Get the user from the session
    const { data: user, error } = await supabase.auth.getUser();

    if (error) {
        throw error;
    }
    const session = await supabase.auth.getSession();
    const accessToken = session?.data.session?.provider_token;

    return { user, accessToken };
}