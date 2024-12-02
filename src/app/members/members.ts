/**
 * Profile object for a member in the community
 */
export interface Member {
    name: string,
    skills: string[],
    socials: {
        // your social username
        github: string;
        linkedin: string;
        twitter: string;
    }
}

/**
 * List of community members 
 * 
 * Add your own profile at the buttom of this object
 */
export const members: Member[] = [
    // Sample, copy this and make a copy with your details
    {
        name: 'Mofiro Jean',
        skills: ['Fullstack Developer'],
        socials: {
            github: 'mofirojean',
            linkedin: 'mofirojean',
            twitter: 'mofirojean'
        }
    },
    {
        name: 'Neba Desmond',
        skills: ['Software Developer'],
        socials: {
            github: 'nebadesmondc',
            linkedin: 'nebadesmondc',
            twitter: 'nebadesmondc'
        }
    },
    {
        name: 'John Brindi',
        skills: ['Cyber Enthusiast', "Python", "JavaScript"],
        socials: {
            github: 'johnbrindi',
            linkedin: 'mazwewoh-john-brindi-6684a3284',
            twitter: 'johnbrindi'
        }
    },
    {
        name: 'Doh Landrine',
        skills: ['Mobile and Game Developer',],
        socials: {
            github: 'dohlandrine',
            linkedin: 'dohlandrine',
            twitter: 'DohLandrine'
        }
    },
    {
        name: 'Emma',
        skills: ['Backend Developer'],
        socials: {
            github: 'Emma20040',
            linkedin: 'Emmanuel Nkwanwi Fongong',
            twitter: 'cryptoTech237'
        }
    },
    {
        name: 'Djuikui vanelle',
        skills: ['wed Developer'],
        socials: {
            github: 'Vanelledjuikui91',
            linkedin: 'Vanelledjuikui91',
            twitter: 'Vanelledjuikui91'
        }
    },
]