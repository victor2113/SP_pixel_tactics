# Описание игры

# КАРТЫ

### Вид:

![example card](https://user-images.githubusercontent.com/81598492/126800389-561e414a-6839-4a14-b93e-8627c8aae99e.png)

### Варианты использования:
*	Лидер разыгрывается в начале игры. Имеет собственные количество жизней и силу атаки, а также способности, действующие всю игру. Находится в центре отряда.
*	Герой разыгрывается в течение боя при помощи действия “нанять героя”. Имеет собственные количество жизней и силу атаки, а также разные способности в зависимости от того, в каком ряду игрового поля находится.
*	Герой авангарда располагается в ряду перед лидером. Использует способность авангарда.
*	Герой флангов располагается в одном ряду с лидером (справа или слева от него). Использует способность фланга.
*	Герой тыла располагается в ряду позади лидера. Использует способность тыла.
*	Приказ разыгрывается с руки игрока в качестве одноразового эффекта. Карта сбрасывается сразу после использования приказа.

### Способности героев

*	Заклинания - альтернативное действие вместо совершения атаки.
*	Пассивные способности - постоянно активны и начинают действовать сразу
*	Реакции - ответное действие на определенное событие. Срабатывают сразу после выполнения условия их активации.


# ХОД ИГРЫ

Игра состоит из 3 раундов (до 2 побед). Цель - снизить хп лидера соперника до 0.
	
У каждого игрока есть своя колода из 25 карт и сброс. Колода лежит рубашкой вверх.
В начале игры игроки берут из своих колод по 5 карт: 1 карту выбирают лидером, оставшиеся 4 - стартовая рука игрока.

По дефолту ход игрока состоит из 2 действий*, одно и то же действие можно совершить дважды.
Первый ход определяется случайным образом.
В первый раунд объявлено перемирие, т.е. нельзя использовать атаки и заклинания против другого игрока, использовать приказы, взаимодействовать с картами или отрядом соперника.
	
	РАУНД

		1 ВОЛНА (авангард)
			игроки поочерёдно делают ход
			подсчет потерь	

		2 ВОЛНА (фланги)
			игроки поочерёдно делают ход
			подсчет потерь

		3 ВОЛНА (тыл)
			игроки поочерёдно делают ход
			подсчет потерь

		очередность ходов меняется на противоположный
		начинается новый раунд

Прим.: герой/лидер, получивший летальный урон, может совершать действия до подсчета потерь. Если герой не исцелен, то в конце волны он повержен и превращается в “тело” (жетоны урона убираются, карта героя переворачивается лицом вниз, клетку нельзя использовать, пока тело не будет убрано или возрождено). Если лидер не исцелен, игра окончена.

### *Действия:

*	Взять карту из своей колоды (если не достигнут предел в 5 карт на руке или карты в колоде не закончились).
*	Розыгрыш героя из руки в любую пустую клетку текущей волны.
*	Атака героем/лидером (герой не может действовать в ту же волну, в которой он был разыгран). Атакующий наносит урон, равный его силе атаки. После атаки на героя/лидера, являющегося целью, помещаются жетоны нанесенного урона и остаются, пока герой/лидер не будут повержены или сняты специальными эффектами.

### Виды атак:
*	Ближняя атака (доступна героям/лидеру, находящимся в ближнем бою, т.е. первым в столбце; тела не блокируют ближнюю атаку)
*	Дальняя атака (только герои/лидер, у которых есть соответствующая способность могут атаковать любую карту противника)

Прим.: герои со способностью “перехват” блокируют дальние атаки на позадистоящих, становясь целью атаки вместо них.

*	Сотворить заклинание героем/лидером (после этого действия герой не может атаковать или двигаться в эту же волну).
*	Специальные действия лидера (чаще всего могут быть использованы во            время любой волны).
*	Разыграть приказ - покажите карту с приказом, следуйте тексту, сбросьте карту.
*	Убрать тело - убрать тело с любой клетки, вне зависимости от текущей волны.
*	Передвижение - передвиньте героя в любую свободную клетку своего отряда (лидер не может передвигаться).
*	Рокировка - поменять двух героев/тела местами (длительное действие).
*	Пас - отказ от действий, ваш ход заканчивается.

Прим.: Длительное действие - тратит 2 обычных действия.
Свободное действие - не тратит действие.
Ограниченное действие - может быть использовано один раз за ход.
