import { BehaviorSubject } from "rxjs";

let articles = [
    {id: 1, title: 'learn react', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, neque?'},
    {id: 2, title: 'learn django', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, neque?'},
    {id: 3, title: 'learn laravel', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, neque?'},
    {id: 4, title: 'learn spring-boot', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, neque?'}
];

export const articles_observable = new BehaviorSubject(articles)

export const addArticle = (article) => {
    articles = [article, ...articles]
    articles_observable.next(articles)
}

export const deleteArticle = (id) => {
    articles = articles.filter(article => article.id !== id)
    articles_observable.next(articles)
}
